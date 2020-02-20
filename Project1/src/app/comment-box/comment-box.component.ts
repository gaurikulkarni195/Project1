
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comments } from './../shared/comment'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { flyInOut, expand } from '../animations/animations';



@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.scss'],
  host: {
    '[@flyInOut]': 'true',

    'style': 'display:block;'

  },
  animations: [
    flyInOut(),
    expand()

  ]

})
export class CommentBoxComponent implements OnInit {

  profilePicture = { path: 'assets/flower.jpg' }
  commentForm: FormGroup;
  showSubComment = false;

  commentList = {
    "comment": [
      {

        "comment": "Imagine all the eatables, living in conFusion!",

      },
      {

        "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",

      }
      // {

      //   "comment": "Imagine all the eatables, living in conFusion!",

      // }
    ]
  }

  SubcommentList = {
    "subcomment": [
      {

        "subcomment": "Imagine all the eatables, living in conFusion! New subcomment",

      },
      {

        "subcomment": "subcomment!",

      },
      {

        "subcomment": "subcpmment conFusion!",

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
  onViewAllComment() {
    if (this.showSubComment == false) {
      this.showSubComment = true;
    }
    else if (this.showSubComment == true) {
      this.showSubComment = false;
    }


  }
  showEmojis = false;
  emojiList = ['like', 'love', 'wow', 'haha', 'sad', 'angry']

  emojiPath(emoji) {
    return `assets/reactionEmojis/${emoji}.svg`
  }

  toggleShow() {
    this.showEmojis = !this.showEmojis
  }

}

// 
