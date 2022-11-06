// 🔔 类型的声明：根据实际接口返回的数据，从最内层，到最外层

export type ApiRes<T> = {
    code: string;
    msg: string;
    // 考虑到不同接口返回的 result 不同，用泛型占位
    result: T;
};

// 分类数据
export type CategoryItem = {
    id: string;
    name: string;
    picture: string;
    children: CategoryChildren[];
    goods: CategoryGoods[];
};

export type CategoryChildren = {
    id: string;
    name: string;
    picture: string;
};

export type CategoryGoods = {
    desc: string;
    id: string;
    name: string;
    picture: string;
    price: string;
};

// 存一个更有语义的类型名字
export type GoodsItem = CategoryGoods;

export type CategoryList = CategoryItem[];

// 轮播图类型
export type BannerItem = {
    id: string;
    imgUrl: string;
    hrefUrl: string;
    type: string;
};

export type BannerList = BannerItem[];
