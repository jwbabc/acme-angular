import { Component, OnInit } from '@angular/core';
import { Config, ConfigService } from '../config/config.service'

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  providers: [ ConfigService ],
  styleUrls: ['./node.component.sass']
})
export class NodeComponent implements OnInit {
  nodeUrl: string;
  node: object;
  error: any;
  values: string;

  constructor(
    private configService:ConfigService
  ) {}

  ngOnInit(): void {
    
    this.configService.getConfig()
      .subscribe(
        (data: Config) => this.nodeUrl = data.endpointURL, // success path,
        error => this.error = error, // error path
      );
  }

  onInputKey(event: any) {
    
    if (this.nodeUrl !== null) {

      this.getNode(event.target.value)
        .subscribe(
          (data: Object) => this.node = data,
          error => this.error = error, // error path
          () => console.log(this.node)
        )
    }
  }

  getNode(node:number) {

    return this.configService.getNode(this.nodeUrl + '?id=' + node);
  }
}
