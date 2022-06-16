import { Component } from '@angular/core';
import { ToastService } from 'ng-uikit-pro-standard';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './headerstyle.css'],
  providers: [ToastService]
})
export class AppComponent {
  constructor(private alertService: ToastService) { }

  searchInput = null;
  userInfo = {
    name: 'Azita',
    lastName: 'hatami',
    userName: 'Azit_Hatami',
    img: {
      guid: '1234567890987654',
      extention: 'jpg',
      url: null
    },
    bio: 'Make the most of opportunities; you might not get a next time',
    location: 'Iran Fars Shiraz'
  }
  tweetsList = [
    {
      time: '23 Min',
      description: 'Very Good Words...',
      commentCount: 234,
      replyCount: 5234,
      like: 5465,
      comments: [
        { time: '45 Min', userName: 'John_Ram', name: 'John', lastName: 'Ramacy', description: 'The expectations of life depend upon diligence; the mechanic that would perfect his work must first sharpen his tools. ~Confucius' }
      ],
      files: [
        {
          guid: '1234567890987654',
          extention: 'jpg',
          src: 'assets/images/twitter/mountion3.jpg'
        },
        {
          guid: '1234567890987654',
          extention: 'jpg',
          src: 'assets/images/twitter/mountion2.jpg'
        },
        {
          guid: '1234567890987654',
          extention: 'jpg',
          src: 'assets/images/twitter/mountion1.jpg'
        }
      ]
    },
    {
      time: '2 Hour',
      description: 'Be happy for this moment. This moment is your life',
      commentCount: 45,
      replyCount: 323,
      like: 542,
      comments: [
        { time: '45 Min', userName: 'John_Ram', name: 'John', lastName: 'Ramacy', description: 'The expectations of life depend upon diligence; the mechanic that would perfect his work must first sharpen his tools. ~Confucius' }
      ],
    },
    {
      time: '3 Hour',
      description: 'In a gentle way, you can shake the world',
      commentCount: 65,
      replyCount: 234,
      like: 5454,
      comments: [
        { time: '45 Min', userName: 'John_Ram', name: 'John', lastName: 'Ramacy', description: 'The expectations of life depend upon diligence; the mechanic that would perfect his work must first sharpen his tools. ~Confucius' }
      ],
    }
  ]
  selectedMenuItem = 2;
  trendsList = [
    {
      title: '#Music',
      tweetNum: '65k'
    },
    {
      title: '#Apple',
      tweetNum: '5k'
    },
    {
      title: '#Apply',
      tweetNum: '43.5k'
    },
    {
      title: '#Betta',
      tweetNum: '43.5k'
    }
  ]
  suggestedUsers = [
    {
      name: 'Desiree',
      lastName: 'Garber',
      userName: 'desireegarber',
      img: {
        guid: '1234567890987654',
        extention: 'jpg',
        src: 'assets/images/twitter/desireegurber.jpg'
      }
    },

    {
      name: 'Joao',
      lastName: 'Moreira Lima',
      userName: 'joaomanuel',
      img: {
        guid: '1234567890987654',
        extention: 'jpg',
        src: 'assets/images/twitter/joame.jpg'
      }
    },
    {
      name: 'Tommy',
      lastName: 'Didario',
      userName: 'tommy_didario',
      img: {
        guid: '1234567890987654',
        extention: 'jpg',
        src: 'assets/images/twitter/tommy.jpg'
      }
    }
  ]
  ngOnInit() {
    document.body.classList.add('twitter');
  }

  showInfo() {
    let options = { closeButton: true, tapToDismiss: true, extendedTimeOut: 30000, toastClass: 'opacity' };
    this.alertService.success('Notification', 'Hi It Is A Toast Angular Notification', options);
  }
}
