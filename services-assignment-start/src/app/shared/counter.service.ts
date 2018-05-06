export class CounterService {
    activeCount: number;
    inactiveCount: number;

    constructor(){
        this.activeCount = 0;
        this.inactiveCount = 0;
    };

    onActiveCount(){
        this.activeCount++;
        console.log('Active Count: ' + this.activeCount);
    }

    onInactiveCount(){
        this.inactiveCount++;
        console.log('Inactive Count: ' + this.inactiveCount);
    }

}