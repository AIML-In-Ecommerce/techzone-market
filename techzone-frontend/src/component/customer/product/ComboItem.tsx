"use client";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { PlusOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";

interface ComboItemProp {
  id: string;
  imageUrl: string;
  name: string;
  price: number;
  productUrl: string;
}

const ComboItem = (combo: ComboItemProp) => {
  // const t = useTranslations("Tabs");

  return (
    <div className="flex flex-row">
      <PlusOutlined />
      <Checkbox
        style={{ marginRight: 3, marginLeft: 10 }}
        // onChange={onChange}
      >
        <div className="max-w-[240px] bg-white rounded-xl overflow-hidden md:max-w-2xl relative">
          <div className="flex flex-col">
            <Link href={`/${combo.productUrl}`}>
              <div className="md:shrink-0">
                <img
                  className="h-40 object-contain w-full"
                  src={combo.imageUrl}
                  alt={combo.name}
                />
              </div>
            </Link>
            <div className="p-3">
              <Link href={`/${combo.productUrl}`}>
                <div className="mt-1 leading-tight font-medium text-black hover:underline overflow-hidden roboto-bold line-clamp-2">
                  {combo.name}
                </div>
              </Link>
              <div className="mt-1 leading-tight font-medium text-black text-ellipsis overflow-hidden roboto-bold text-wrap-2-line">
                {combo.price} Đ
              </div>
            </div>
          </div>
        </div>
      </Checkbox>
    </div>
  );
};

export default ComboItem;
