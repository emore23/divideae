import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'web-user-profile',
  styleUrl: 'user-profile.styles.scss',
  shadow: true,
})
export class UserProfile {
	@Prop() coverThumbnail: string;
	@Prop() name: string;
	@Prop() occupation: string;
	@Prop() direction: 'row' | 'column' = 'column';

  render() {
    const classes = {
      'container': true,
      [this.direction]: !!this.direction
    }

    const classWrapper = {
      'wrapper': true,
      [this.direction]: !!this.direction
    }

    return (
      <Host>
        <div
          class={classes}
        >
          <web-avatar avatar={this.coverThumbnail} />

          <div class={classWrapper}>
            <span>{this.name}</span>

            <p>{this.occupation}</p>
          </div>
        </div>
      </Host>
    );
  }
}
