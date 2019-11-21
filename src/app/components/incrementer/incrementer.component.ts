import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: []
})
export class IncrementerComponent implements OnInit {

  @ViewChild('txtProgress', {static: false}) txtProgressRef: ElementRef;
  @Input() progress: number = 50;
  @Input() title: string = 'Título';

  @Output() updateProgress: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  changeProgress(value: number): void {
    console.log(this.progress);
    if (this.progress > 95 && value > 0) {
      this.progress = 100;
      return;
    }

    if (this.progress < 1 && value < 0) {
      this.progress = 0;
      return;
    }
    this.progress += value;
    this.updateProgress.emit(this.progress);
    this.txtProgressRef.nativeElement.focus();
  }

  onChanged(newValue: number) {
    // const inputProgress: any = document.getElementsByName('progress')[0];
    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    // inputProgress.value = this.progress;
    this.txtProgressRef.nativeElement.value = this.progress;
    this.updateProgress.emit(this.progress);
    console.log(newValue);
  }

}
