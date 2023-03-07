export default class CommonUtils {
    static async delay(ms: number) {
        await new Promise(resolve => setTimeout( resolve, ms));
    }
}

