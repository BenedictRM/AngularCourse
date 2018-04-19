import { 
  Component, 
  OnInit, 
  OnChanges, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  Input, 
  ViewEncapsulation,
  SimpleChanges,
  OnDestroy,
  ViewChild,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements
  OnInit, 
  OnChanges,
  AfterContentChecked,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy, 
  AfterContentInit{
  // Pass in an argument to make an alias that is bindable to the outside
  @Input('srvElement') element: {type: string, name: string, content: string};
  //Can this work before ngAfterViewInit?
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { 
    console.log('constr called');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('changes called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('init called');
    console.log('Text Content' + this.header.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log('do checking');
  }

  ngAfterContentInit(){
    console.log('after content init');
    console.log('Text Content of Paragraph ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(){
    console.log('after content checked');
  }
  //Afer view initializes
  ngAfterViewInit(){
    console.log('after content init');
    console.log('Text Content after init ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log('after content checked');
  }

  ngOnDestroy(){
    console.log('Destroyed');
  }
}
