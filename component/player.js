export default {
  name: 'Player',
  props: {
    player: {
      type: Object,
      required: true,
      validator(value) {
        return value && typeof value.nickname === 'string' && typeof value.position === 'string';
      }
    }
  },
  template: `
    <div class="player-card">
      <div class="icon">
        <i class="bi bi-person-circle"></i>
      </div>
      <div class="player-info">
        <h4>{{ player.nickname }}</h4>
        <p class="p-position">{{ player.position }}</p>
      </div> 
    </div>
  `
};

