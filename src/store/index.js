import { createStore } from 'vuex'
import {auth, db} from '../firebase/firebaseInit.js';
import {getDoc, doc, updateDoc, collection, orderBy, query, getDocs, deleteDoc} from 'firebase/firestore';

// Create a new store instance.
const store = createStore({
    state: {
        user: null,
        isUserAdmin: null,
        userEmail: null,
        userFirstName: null,
        userLastName: null,
        userUsername: null,
        userProfileId: null,
        userInitials: null,
        allBlogPosts:[],
        isPostLoaded: null,
        blogHeader: "",
        blogContent: "Skriv din blog post her",
        blogImageName: "",
        blogImagePreview: null,
        blogImagePath: null,
        editPost: null,
    },
    getters: {
        blogPostsCards(state) {
            return state.allBlogPosts;
        }
    },
    mutations: {
        newBlog(state, payload) {
            state.blogContent = payload;
        },
        updateBlogHeader(state, payload) {
            state.blogHeader = payload;
        },
        newFileName(state, payload) {
            state.blogImageName = payload;
        },
        setFileURL(state, payload) {
            state.blogImagePath = payload;
        },
        imagePreviewOpen(state) {
            state.blogImagePreview = !state.blogImagePreview;
        },
        editPostToggle(state, payload){
            state.editPost = payload;
            console.log(state.editPost)
        },
        blogPostFilter(state, payload){
            state.allBlogPosts = state.allBlogPosts.filter((post) => post.blogID !== payload);
        },
        setBlogState(state, payload) {
            state.blogHeader = payload.blogHeader;
            state.blogContent = payload.blogContent;
            state.blogImagePath = payload.blogImagePath;
            state.blogImageName = payload.blogCoverImageName;
        },
        userUpdate(state, payload){
            state.user = payload;
        },
        setUserAdminState(state, payload) {
            state.isUserAdmin = payload;
            console.log(state.isUserAdmin);
        },
        setUserProfileInfo(state, doc) {
             state.userProfileId = doc.id;
             state.userEmail = doc.data().userEmail;
             state.userFirstName = doc.data().firstName;
             state.userLastName = doc.data().lastName;
             state.userUsername = doc.data().userName;
        },
        setUserInitials(state){
            state.userInitials =
                state.userFirstName.match(/(\b\S)?/g).join("") +
                state.userLastName.match(/(\b\S)?/g).join("");
        },
        changeUserFirstName(state, payload){
            state.userFirstName = payload;
        },
        changeUserLastName(state, payload){
            state.userLastName = payload;
        },
        changeUserUsername(state, payload){
            state.userUsername = payload;
        },
    },
    actions: {
        async getCurrentUser({commit}, user) {
            const docRef = doc(db, "users", auth.currentUser.uid);
            const docSnap = await getDoc(docRef);
            commit("setUserProfileInfo", docSnap);
            commit("setUserInitials");
            const token = await user.getIdTokenResult();
            const admin = await token.claims.admin;
            commit("setUserAdminState", admin);
        },
        async userUpdateSettings({commit, state}) {
            const docRef = await doc(db, "users", state.userProfileId);
            await updateDoc(docRef,{
                firstName: state.userFirstName,
                lastName: state.userLastName,
                username: state.userUsername
            });
            commit("setUserInitials");
        },
        async getBlogPost({state}){
            const collectionRef = await collection(db, 'blogs');
            const collectionQuery = query(collectionRef, orderBy('date', 'desc'));
            const dbResults = await getDocs(collectionQuery);
            dbResults.forEach((doc) => {
                if (!state.allBlogPosts.some(post => post.blogID === doc.id)){
                const data = {
                    blogID: doc.data().blogID,
                    blogContent: doc.data().blogContent,
                    blogCoverImage: doc.data().blogCoverImage,
                    blogHeader: doc.data().blogHeader,
                    blogDate: doc.data().date,
                    blogCoverImageName: doc.data().blogCoverImageName,
                };
                state.allBlogPosts.push(data)
                }
            });
            state.isPostLoaded =  true;
            console.log(state.allBlogPosts);
        },
        async updatePost({ commit, dispatch }, payload) {
            commit("blogPostFilter", payload);
            await dispatch("getBlogPost");
        },
        async deletePost({commit}, payload){
            const getBlogPost = doc(db, 'blogs', payload);
            await deleteDoc(getBlogPost);
            commit("blogPostFilter", payload);
        }
    },
    modules:{},
})

// Install the store instance as a plugin
export default store