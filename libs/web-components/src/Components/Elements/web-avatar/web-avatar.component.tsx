// Dependencies
import { Component, h, Prop, Host } from '@stencil/core';

@Component({
  tag: 'web-avatar',
  styleUrl: 'web-avatar.styles.scss',
  shadow: true
})
export class WebAvatar {
  @Prop() avatar: string;

  render() {
    return (
      <Host>
        <div class="container">
          <img src={this.avatar} alt="" />
        </div>
      </Host>
    );
  }
}
