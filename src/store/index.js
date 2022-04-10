import { createStore } from "vuex";

const store = createStore({
  state: {
    products: [],
    cart: 0,
    faq: [
      {
        title: "Porta non pulvinar neque laoreet ?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Aenean euismod elementum nisi quis eleifend. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Malesuada proin libero nunc consequat interdum varius. Auctor eu augue ut lectus arcu bibendum at. Imperdiet dui accumsan sit amet nulla. Quis auctor elit sed vulputate mi sit amet mauris commodo. Quis vel eros donec ac odio tempor orci. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Viverra aliquet eget sit amet tellus cras adipiscing enim. Odio tempor orci dapibus ultrices in iaculis. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Quam pellentesque nec nam aliquam sem et tortor consequat. Imperdiet nulla malesuada pellentesque elit. Nisl nunc mi ipsum faucibus vitae aliquet. Sagittis id consectetur purus ut faucibus pulvinar elementum integer. Nibh sed pulvinar proin gravida hendrerit lectus a. Adipiscing commodo elit at imperdiet dui accumsan sit. Vel pharetra vel turpis nunc. Nulla aliquet porttitor lacus luctus. Quam quisque id diam vel quam elementum pulvinar. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Eu mi bibendum neque egestas congue quisque egestas diam in. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Faucibus nisl tincidunt eget nullam non nisi. Pulvinar neque laoreet suspendisse interdum consectetur libero id. Sapien nec sagittis aliquam malesuada bibendum arcu. Nec dui nunc mattis enim ut. Ac tortor dignissim convallis aenean et tortor. Sed turpis tincidunt id aliquet risus. Dictum varius duis at consectetur lorem donec massa sapien faucibus. Ut sem nulla pharetra diam sit. Aliquam sem et tortor consequat id porta nibh venenatis. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Id porta nibh venenatis cras sed. Egestas tellus rutrum tellus pellentesque eu tincidunt. Ultrices mi tempus imperdiet nulla malesuada. Enim nunc faucibus a pellentesque sit amet. Elementum curabitur vitae nunc sed. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Tempor nec feugiat nisl pretium fusce id velit. Sed arcu non odio euismod lacinia at quis. Sit amet tellus cras adipiscing enim eu turpis.",
      },
      {
        title:
          "Interdum velit laoreet id donec ultrices tincidunt arcu non sodales ?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo donec enim diam. Scelerisque viverra mauris in aliquam sem fringilla ut. A diam sollicitudin tempor id eu nisl nunc mi ipsum. Accumsan in nisl nisi scelerisque. Aenean sed adipiscing diam donec adipiscing. Mi eget mauris pharetra et ultrices neque. Ultrices in iaculis nunc sed augue lacus viverra vitae. Nec ullamcorper sit amet risus nullam. Aliquet nibh praesent tristique magna sit amet purus. Risus ultricies tristique nulla aliquet. Eget egestas purus viverra accumsan in nisl. Enim eu turpis egestas pretium aenean pharetra magna ac place Neque ornare aenean euismod elementum nisi quis eleifend. Lacus vel facilisis volutpat est velit egestas dui. Adipiscing vitae proin sagittis nisl rhoncus. Faucibus ornare suspendisse sed nisi lacus sed. Nisi est sit amet facilisis magna etiam tempor. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Tincidunt arcu non sodales neque sodales. Eu turpis egestas pretium aenean. Hendrerit gravida rutrum quisque non tellus orci. Blandit turpis cursus in hac habitasse platea. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. A lacus vestibulum sed arcu non. Egestas dui id ornare arcu odio ut. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Nulla facilisi etiam dignissim diam quis. Donec ultrices tincidunt arcu non. Libero justo laoreet sit amet cursus sit amet dictum sit. Cursus risus at ultrices mi tempus imperdiet nulla. Dui faucibus in ornare quam. In fermentum et sollicitudin ac orci. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Laoreet suspendisse interdum consectetur libero id. Ut diam quam nulla porttitor massa id neque.",
      },
      {
        title: "Interdum posuere lorem ipsum dolor sit amet ?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget gravida cum sociis natoque penatibus et. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Bibendum arcu vitae elementum curabitur vitae nunc. Pharetra massa massa ultricies mi quis hendrerit dolor. Neque vitae tempus quam pellentesque nec nam. Nulla pellentesque dignissim enim sit amet venenatis. Magna ac placerat vestibulum lectus mauris ultrices eros. Vitae justo eget magna fermentum iaculis. Suspendisse potenti nullam ac tortor vitae purus. Varius vel pharetra vel turpis nunc. Commodo ullamcorper a lacus vestibulum sed arcu non odio euis Fermentum dui faucibus in ornare. Quisque non tellus orci ac auctor augue mauris. Vitae justo eget magna fermentum iaculis eu non diam. Ornare arcu odio ut sem nulla pharetra diam sit. Vitae elementum curabitur vitae nunc sed velit dignissim sodales. Pretium nibh ipsum consequat nisl vel pretium lectus quam. Tristique sollicitudin nibh sit amet commodo nulla facilisi nullam. Pharetra diam sit amet nisl suscipit adipiscing. Consequat semper viverra nam libero. Varius morbi enim nunc faucibus a. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Mauris ultrices eros in cursus turpis. Morbi enim nunc faucibus a pellentesque sit amet porttitor eget. Egestas quis ipsum suspendisse ultrices. Porttitor leo a diam sollicitudin tempor id. Nec nam aliquam sem et tortor consequat id. Habitasse platea dictumst quisque sagittis purus. Curabitur gravida arcu ac tortor dignissim convallis aenean. Elementum sagittis vitae et leo. Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed. Aliquam ultrices sagittis orci a scelerisque purus semper eget duis. Orci eu lobortis elementum nibh tellus molestie. A pellentesque sit amet porttitor eget dolor morbi. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Ultricies tristique nulla aliquet enim. Turpis egestas integer eget aliquet nibh praesent tristique magna sit. Condimentum id venenatis a condimentum vitae sapien pellentesque. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. In ante metus dictum at tempor. Vehicula ipsum a arcu cursus.",
      },
    ],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    // Call API
    fetchAllProducts(context) {
      fetch("https://fakestoreapi.com/products?limit=4")
        .then((response) => response.json())
        .then((json) => {
          context.commit("setProducts", json);
        })
        .catch((err) => console.error(err));
    },
  },

  getters: {
    products(state) {
      return state.products;
    },
  },
});
export default store;
