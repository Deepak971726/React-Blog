import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    dabases;
    bucket;
    
    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.dabases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }
    
    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.dabases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)
        }
    }
    
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.dabases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error)
        }
    }
    
    async deletePost(slug){
        try {
            return await this.dabases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)
        }
    }
    
    async getPost(slug){
        try {
            
             return await this.dabases.getPost(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error)
        }
    }
    
    async getPosts(queries = [Query.equal("status","active")]){
        
        try {
            
            return await this.dabases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
            
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error)
            return false;
        }
    }
    
    // file update service or method
    
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error", error)
            return false;
        }
    }
    
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error)
        }
    }
    
    async getFilePreview(fileId){
        return await this.bucket.getFilePreview(
            conf.appwriteCollectionId,
            fileId
        )
    }
}





const service = new Service()
export default service;