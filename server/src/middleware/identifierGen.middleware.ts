import { Request, Response, NextFunction } from "express";

const identifierGenerator = (req:Request, res:Response, next:NextFunction) => {

    let firstSecondsPart = `${Date.now()}`;
    let firstSecondsPartArr = firstSecondsPart.split('').slice(10, 13).join('');

    var secondsSecondsPart, secondSecondsPartArr;

    let anotherPartArr = setTimeout(() => {

        secondsSecondsPart = `${Date.now()}`;
        secondSecondsPartArr = secondsSecondsPart.split('').slice(9, 13).join('');
        
        return secondSecondsPartArr;
    }, 50);

    const identifier = `${anotherPartArr}.fs.simplifier.${firstSecondsPartArr}`;
    req.body.identifier = identifier;
    
    next();
}

export default identifierGenerator;