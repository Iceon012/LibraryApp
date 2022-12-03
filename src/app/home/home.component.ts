import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selected: any;

  campaignOne = new FormGroup({
    start: new FormControl(new Date(year, month, 13)),
    end: new FormControl(new Date(year, month, 16)),
  });

  ngOnInit(): void {
  }

  // product = {
  //   prodnum: localStorage.getItem("prodnum"),
  //   name: localStorage.getItem('prodname'),
  //   brand: localStorage.getItem('prodbrand')
  // };
  // constructor(
  //   private activeroute: ActivatedRoute,
  //   private post: LibrarylogService,
  //   private http: HttpClient
  // ) { }
  // PictureForm = new FormGroup({});
  // selectedFile: any;
  // filename: any;
  // profile: any;
  // uploading: any;
  // progress = 0;
  // prodnum: any;
  // pid: any;
  // images: any;
  // ngOnInit(): void {
  //   // this.prodnum = '{"pid":"' + localStorage.getItem("prodnum") + '"}';
  //   // this.prodnum = JSON.parse(this.prodnum);
  //   // this.pid = localStorage.getItem("prodnum");
  //   // this.post.getData(this.prodnum).subscribe((result: any) => {
  //   //   this.images = result.pics;
  //   //   console.log(result);
  //   // });
  // }
  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0];
  //   this.filename = this.selectedFile.name;
  // }

  // onPost() {
  //   const fd = new FormData();
  //   if (this.selectedFile != null) {
  //     console.log(this.selectedFile);
  //     this.uploading = true;
  //     fd.append('files', this.selectedFile);
  //     fd.append('pid', this.pid);
  //     console.log(fd);

  //     this.http.post('http://localhost/Sales/saveimage.php', fd, {
  //       observe: 'events',
  //       reportProgress: true
  //     })
  //       .subscribe((event: any) => {
  //         console.log(event);
  //         if (event.type === HttpEventType.UploadProgress) {
  //           this.progress = (event.loaded / event.total) * 100;
  //         }
  //         if (event.type == HttpEventType.Response) {
  //           this.images = event.body.pics;
  //           console.log(event);
  //         }
  //       });
  //   }
  // }
  // deleteImage(imgid: any, pid: any) {
  //   return this.http.delete("http://localhost/Sales/deleteimage.php?imgid=" + imgid +
  //     "&pid=" + pid).subscribe((result: any) => {
  //       this.images = result.pics
  //       console.log(result);
  //     });
  // }
}
