// Dependencies
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'phm-header',
  styleUrl: 'header.styles.scss',
  shadow: true
})
export class Header {
  @Prop() igniteSimbol: string;

  render() {
    return (
      <div>
        <img src="" alt="" />

        <p>Ignite Feed</p>
      </div>
    );
  }
}
