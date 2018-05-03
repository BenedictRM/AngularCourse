import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  //Bind to a property called 'unless' -- 'set' makes this a method setter, and whenever something changes about the property 'unless' this will also get called
  @Input() set appUnless(condition: boolean) {
    if(condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
