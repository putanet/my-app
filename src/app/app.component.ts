import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formData = {
    firstName: '',
    lastName: '',
    gender: '',
    score: null
  };

  onSubmit() {
    if (this.validateForm()) {
      
      console.log('Form data submitted:', this.formData);
    }
  }

  onCancel() {
   
    console.log('Form canceled');
  }

  validateForm(): boolean {
    if (!this.formData.firstName) {
      alert('First name is required');
      return false;
    }

    if (!this.formData.lastName) {
      alert('Last name is required');
      return false;
    }

    if (!this.formData.gender) {
      alert('Gender is required');
      return false;
    }

    if (this.formData.score === null) {
      alert('Score is required');
      return false;
    }

    if (isNaN(this.formData.score)) {
      alert('Score must be a number');
      return false;
    }

    if (this.formData.score < 0) {
      alert('Minimum score is 0');
      return false;
    }

    if (this.formData.score > 100) {
      alert('Maximum score is 100');
      return false;
    }

    return true;
  }
}