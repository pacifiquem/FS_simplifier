import bcrypt from 'bcrypt';
import { Request, Response, NextFunction } from "express";
import { FileModel } from '../model/file.model';
import hash from '../utils/hash.utils';
import cryptoHash from '../utils/cryptoHash.utils';



export const home =  async(req:Request, res:Response, next:NextFunction) => {
    res.send('welcome to FS.simplifier');
};


export const uploadFile = async(req:Request, res:Response, next:NextFunction) => {
    
    try {

        console.log(req.file);
        console.log(req.body);

        if(req.file !=undefined && req.body.password != undefined) {

            const { originalname, path } = req.file;
            const password = await hash(req.body.password);;

            const file = await FileModel.create({
                fileOrginalName: originalname,
                file_path: path, 
                password,
                identifier: cryptoHash(req.body.identifier)
            });

            if(file) {
                
                res.status(201).json({
                    success: true, 
                    data: req.body.identifier
                });
            }else {
                res.status(422).json({
                    success: false,
                    message: 'unable to save file'
                })
            }

        }else {

            res.status(422).json({
                success: false,
                message: 'unable to save file'
            });

        }

    } catch (error) {
        next(error);
    }

};

export const downloadFile = async(req:Request, res:Response, next:NextFunction) => {
    try {


        const file = await FileModel.findOne({
            identifier: cryptoHash(req.params.identifier)
        });
        
        if(file != undefined) {
            if(await bcrypt.compare(req.body.password, file.password)) {
    
                res.download(file.file_path, file.fileOrginalName);
                file.downloadsCount++;
                await file.save();
    
            }else {
                res.json({
                    success: false,
                    message: 'invalid password'
                });
            }
        }
    

    } catch (error) {

        next(error);
        
    }
};


export const downloadCounter = async (req:Request, res:Response, next:NextFunction) => {
    try {
        
        const identifier = req.params.identifier;
        const File = await FileModel.findOne({
            identifier: cryptoHash(identifier)
        });
    
        if(File) {
            res.json({
                success: true, 
                data: File.downloadsCount
            });
    
        }else {
            res.json({
                success: false,
                message: "File not found  | invalid identifier" 
            });
        }
        
    } catch (error) {
        res.json({
            success: false, 
            message: "Internal error"
        });
    }

}