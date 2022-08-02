// Dependencies
import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

// Utils
import { IProfileArgs } from './web-card.model';

@Component({
  tag: 'web-card',
  styleUrl: 'web-card.styles.scss',
  shadow: true,
})
export class WebCard {
  @Prop() backgroundCover: string;
  @Prop() icon: string;
  @Prop() profileArgs: IProfileArgs;
  
  @Event() editUserPerfilClicked: EventEmitter;

  render() {
    const styles = {
      backgroundImage: `url(${this.backgroundCover})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '256px',
      height: '72px',
      borderRadius: '8px 8px 0 0',
    };

    return (
      <Host>
        <div class="container">
          <div style={styles} />

          <div class="user">
            <web-user-profile
              coverThumbnail={this.profileArgs.coverThumbnail}
              name={this.profileArgs.name}
              occupation={this.profileArgs.occupation}
              direction={this.profileArgs.direction}
            />
          </div>

          <span />

          <button onClick={ev => this.editUserPerfilClicked.emit(ev.detail)}>
            <img src={this.icon} alt="" />
            
            Editar seu perfil
          </button>
        </div>
      </Host>
    );
  }
}
