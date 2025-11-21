import { Component, computed, Input, signal, input } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
// console.log("🚀 ~ randomIndex:", Math.random() ,  DUMMY_USERS.length , randomIndex)
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  // selectedUser = signal(DUMMY_USERS[randomIndex])
  // imagePath = computed(()=>'assets/users/'+this.selectedUser().avatar)

  

  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  avatar = input.required<string>();
  name = input.required<string>();

  imagePath = computed(()=>{
    return 'assets/users/'+this.avatar();
  })

// get imagePath(){
//     return 'assets/users/'+this.avatar
//   }

  onSelectUser(){
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex])
  }
}
