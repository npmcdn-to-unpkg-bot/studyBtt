/**
 * Created by MSI on 20-Jun-16.
 */
export class HeroObject {
    constructor(
        public id: number,
        public name: string,
        public power: string,
        // dấu ? là optional
        public alterGo?: string
    ) {
        
    }
}