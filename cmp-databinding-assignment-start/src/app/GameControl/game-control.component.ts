import { 
    Component,
    OnInit,
    Output,
    EventEmitter
 
} from '@angular/core';

@Component({
  selector: 'game-control-element',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})

export class GameComponent implements OnInit{

    @Output('interval-fired') intervalFired = new EventEmitter<number>();
    interval: any;
    incr: number;

    constructor(){
        this.incr = 0;
    }

    ngOnInit(){
    }

    onStartGame(){
        this.interval = setInterval(() => { this.intervalFired.emit(this.incr++) }, 1000);
    }

    onStopGame(){
        clearInterval(this.interval);
        this.interval = null;
    }
}