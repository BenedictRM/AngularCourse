import { Component } from '@angular/core';

@Component({
    selector: 'app-warning',
    templateUrl: './app.component.html',
    styleUrls: ['./app.style.css']
})

export class WarningComponent{
    warn: string = 'WARNING';
    constructor(){}
}