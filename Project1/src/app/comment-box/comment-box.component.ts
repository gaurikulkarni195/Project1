
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comments } from './../shared/comment'

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss']
})
export class CommentBoxComponent implements OnInit {

  profilePicture = { path: 'assets/flower.jpg' }
  commentForm: FormGroup;
  commentList = {
    "comment": [
      {

        "comment": "Imagine all the eatables, living in conFusion!",

      },
      {

        "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",

      },
      {

        "comment": "Imagine all the eatables, living in conFusion!",

      }
    ]
  }

  @ViewChild('commentform', { static: false }) commentFormDirective;

  formErrors = {
    'details': ''
  }

  validationMessages = {
    'details': {
      'required': 'Add your comment here',
      'minlength': 'comment must be atleast 2 words',
      'maxlength': 'comment cannot be more than 255 words',

    }
  };

  constructor(public fb: FormBuilder) {
    this.createForm();
  }


  ngOnInit() {
  }

  createForm() {
    this.commentForm = this.fb.group({
      details: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],

    });

    this.commentForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

  }
  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const commentbox = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += commentbox[key] + ' ';
            }
          }
        }
      }
    }
  }



  onSubmit() {

    // alert("into fun");
    // this.commentList.comment.push(this.commentForm.value);
    this.commentForm.reset({

      details: ''

    });
    this.commentFormDirective.resetForm();

  }

}


