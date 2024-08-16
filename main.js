import Player from "./component/player.js";

const app = Vue.createApp({
  data() {
    return {
      players: [
        {
          id: 71,
          nickname: "Player 1",
          position: "Midfielder",
          contract_end: "2026-06-30",
          option: null,
          option_validity: null,
          contract_end_status: "yellow",
        },
        {
          id: 25,
          nickname: "Player 2",
          position: "Midfielder",
          contract_end: "2026-06-30",
          option: "2027-06-30",
          option_validity: "2026-05-16",
          contract_end_status: "yellow",
        },
        {
          id: 44,
          nickname: "Player 3",
          position: "Defender",
          contract_end: "2026-06-30",
          option: null,
          option_validity: null,
          contract_end_status: "yellow",
        },
        {
          id: 75,
          nickname: "Player 4",
          position: "Forward",
          contract_end: "2027-06-30",
          option: "2028-06-30",
          option_validity: "2027-05-15",
          contract_end_status: "green",
        },
        {
          id: 22,
          nickname: "Player 5",
          position: "Goalkeeper",
          contract_end: "2025-06-30",
          option: null,
          option_validity: null,
          contract_end_status: "red",
        },
        {
          id: 72,
          nickname: "Player 6",
          position: "Forward",
          contract_end: "2026-06-30",
          option: null,
          option_validity: null,
          contract_end_status: "yellow",
        },
        {
          id: 79,
          nickname: "Player 7",
          position: "Forward",
          contract_end: "2028-06-30",
          option: "2029-06-30",
          option_validity: "2028-05-20",
          contract_end_status: "green",
        },
        {
          id: 70,
          nickname: "Player 8",
          position: "Midfielder",
          contract_end: "2027-06-30",
          option: null,
          option_validity: null,
          contract_end_status: "green",
        },
        {
          id: 63,
          nickname: "Player 9",
          position: "Midfielder",
          contract_end: "2025-06-30",
          option: null,
          option_validity: null,
          contract_end_status: "red",
        },
        {
          id: 84,
          nickname: "Player 10",
          position: "Goalkeeper",
          contract_end: "2027-06-30",
          option: "2028-06-30",
          option_validity: "2027-05-15",
          contract_end_status: "green",
        },
      ],
    };
  },
  components: {
    'player': Player
  }
});

app.mount("#app");
