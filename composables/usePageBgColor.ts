import { computed } from "vue";

export function usePageBgColor() {
  // state encapsulated and managed by the composable
  const dynamicBgColor = computed(() => {
    const { path } = useRoute();

    // console.log(path);
    switch (path) {
      case "/":
        return "#3A3A3A";
        break;
      case "/about":
        return "#918868";
        break;
      case "/contact":
        return "#68BB88";
        break;
      case "/services":
        return "#A489BE";
      default:
        return "#3A3A3A";
        break;
    }
  });

  return { dynamicBgColor };
}
