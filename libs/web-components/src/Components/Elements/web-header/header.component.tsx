// Dependencies
import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'web-header',
  styleUrl: 'header.styles.scss',
  shadow: true
})
export class Header {
  @Prop() igniteSimbol: string;

  render() {
    return (
      <Host>
        <div class="container">
          <img src={this.igniteSimbol} alt="" />

          <p>Ignite Feed</p>
        </div>
      </Host>
    );
  }
}
