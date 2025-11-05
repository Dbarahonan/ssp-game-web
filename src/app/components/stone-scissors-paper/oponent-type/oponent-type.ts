import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@Component({
  selector: 'app-oponent-type',
  imports: [CommonModule, ReactiveFormsModule, MatButtonToggleModule],
  templateUrl: './oponent-type.html',
  styleUrl: './oponent-type.scss',
  standalone: true
})
export class OponentType implements OnInit {
  @Input() opponentType: 'IA' | 'RANDOM' = 'RANDOM';
  @Output() opponentTypeChange = new EventEmitter<'IA' | 'RANDOM'>();
  oponentTypeForm!: FormGroup;


  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.oponentTypeForm = this.fb.group({
      opponent: this.fb.control(this.opponentType, [Validators.required])
    });
    
    this.oponentTypeForm.get('opponent')?.valueChanges.subscribe(value => {
      this.opponentTypeChange.emit(value as 'IA' | 'RANDOM');
    });
  }
}
