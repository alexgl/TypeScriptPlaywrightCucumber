// import CryptoJS from 'crypto-js';
import * as CryptoJS from "crypto-js";
import { readFileSync } from 'fs';

export class Encryption {

    static getPassPhrase(): string {
        return readFileSync('encryptkey.txt', 'utf-8');
    }

    static encryptWithAES(plainText: string) : string {
        return CryptoJS.AES.encrypt(plainText, this.getPassPhrase()).toString();
    }
    
    static decryptWithAES(ciphertext: string) : string {
        return CryptoJS.AES.decrypt(ciphertext, this.getPassPhrase()).toString(CryptoJS.enc.Utf8);
    }
}