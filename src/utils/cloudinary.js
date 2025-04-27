import { v2 as cloudinary } from "cloudinary";
import { error } from "console";
import { response } from "express";
import fs from 'fs'



cloudinary.config({ 
    cloud_name: 'dsbbqdmkr', 
    api_key: '638589418555361', 
    api_secret: '_lxK1KdoEZ1_nJo_jlC6Dh-uPxs' ,
    secure: true
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            throw new Error("now file path uploaded")
           
        }

        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
            folder: "uploads", // Organize files in a folder
            use_filename: true, // Use original filename as part of Cloudinary's public ID
            unique_filename: true, // Add unique suffix to prevent overwrites
            overwrite: false // Prevent accidental overwrites
        });
        fs.unlinkSync(localFilePath)
        return response
    } catch (error) {
       console.log(error)
        fs.unlinkSync(localFilePath)
        return null;
    }
}


export {uploadOnCloudinary}