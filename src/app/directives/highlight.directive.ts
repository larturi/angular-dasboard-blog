import { Directive, Input, ElementRef, OnChanges, AfterViewChecked, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges, AfterViewChecked {

  // tslint:disable-next-line: no-input-rename
  @Input('search') word: string;

  private viewRendered: boolean = false;

  constructor(
    private elementRef: ElementRef
  ) { }

  ngAfterViewChecked(): void {
    this.viewRendered = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.word) {
       this.highlightSearchTerm();
    }
  }

  public highlightSearchTerm() {

    if (!this.word || this.word.length < 3) {
      if (this.viewRendered) {
        // Eliminar marcas
        this.removeMarks();
      }
    } else {

      if (this.elementRef.nativeElement) {
        // Limpiar
        this.removeMarks();

        // Buscar
        this.putMarks();
      }

    }
  }

  private putMarks() {
    const searchRegex = new RegExp(this.word, 'gmi');
    this.elementRef.nativeElement.innerHTML = this.elementRef.nativeElement.innerHTML
                                              .replace(searchRegex, match => `<mark>${match}</mark>`);

  }

  private removeMarks() {

    this.elementRef.nativeElement.querySelectorAll('*').forEach(element => {
      const regex = new RegExp('<mark>|</mark>', 'gi');
      const cleanText = element.parentNode.innerHTML.replace(regex, '');
      element.parentNode.innerHTML = cleanText;
    });

  }

}
