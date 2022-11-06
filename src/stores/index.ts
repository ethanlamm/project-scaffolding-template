// 合并 Pinia 模块
import useHomeStore from "./modules/home";
import useAboutStore from "./modules/about";

// 封装 useStore 合并管理所有模块
const useStore = () => {
    return {
        home: useHomeStore(),
        about: useAboutStore(),
    };
};

// 默认导出
export default useStore;