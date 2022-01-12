import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { OrderService } from 'src/app/shared/service/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  Totalrevenue: any;
  Profit: any;
  Ordernotprocessed: any;
  Ordersuccess: any;
  constructor(
    private renderer: Renderer2,
    private router: Router,
    private service: OrderService
  ) {}

  ngOnInit(): void {
    this.loadStatistical();
  }
  ngAfterViewInit() {}

  public loadScripts() {
    this.renderExternalScript('./assets/js/dashboard/dashboard-1.js').onload =
      () => {};
  }
  public renderExternalScript(src: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.defer = true;
    this.renderer.appendChild(document.body, script);
    return script;
  }
  loadStatistical() {
    this.service.getStatistical().then(
      (data: any) => {
        this.Totalrevenue = data.totalrevenue;
        this.Profit = data.profit;
        this.Ordernotprocessed = data.ordernotprocessed;
        this.Ordersuccess = data.ordersuccess;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
