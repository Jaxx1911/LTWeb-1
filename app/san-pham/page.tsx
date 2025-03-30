import Link from "next/link"
import Image from "next/image"
import { Filter, ChevronDown, Grid3X3, List } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export default function ProductsPage() {
  return (
    <>
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Sản phẩm</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Khám phá bộ sưu tập cà vạt đa dạng với chất liệu cao cấp, thiết kế tinh tế và màu sắc phong phú
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar filters - desktop */}
          <div className="hidden md:block w-64 shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h3 className="font-semibold text-lg mb-4">Bộ lọc sản phẩm</h3>

              <div className="border-b pb-4 mb-4">
                <h4 className="font-medium mb-3">Danh mục</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category.id}`} />
                      <label htmlFor={`category-${category.id}`} className="text-sm cursor-pointer">
                        {category.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-b pb-4 mb-4">
                <h4 className="font-medium mb-3">Màu sắc</h4>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <div
                      key={color.id}
                      className="w-8 h-8 rounded-full cursor-pointer border border-muted-foreground/20 hover:ring-2 hover:ring-primary/50"
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              <div className="border-b pb-4 mb-4">
                <h4 className="font-medium mb-3">Giá (nghìn đồng)</h4>
                <div className="px-2">
                  <Slider defaultValue={[200, 1000]} min={100} max={2000} step={100} />
                  <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                    <span>200.000₫</span>
                    <span>1.000.000₫</span>
                  </div>
                </div>
              </div>

              <div className="border-b pb-4 mb-4">
                <h4 className="font-medium mb-3">Chất liệu</h4>
                <div className="space-y-2">
                  {materials.map((material) => (
                    <div key={material.id} className="flex items-center space-x-2">
                      <Checkbox id={`material-${material.id}`} />
                      <label htmlFor={`material-${material.id}`} className="text-sm cursor-pointer">
                        {material.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full">Áp dụng</Button>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Mobile filters */}
            <div className="md:hidden mb-4">
              <Button variant="outline" className="w-full flex items-center justify-between">
                <div className="flex items-center">
                  <Filter className="mr-2 h-4 w-4" />
                  Bộ lọc
                </div>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>

            {/* Sort and view options */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <p className="text-muted-foreground">Hiển thị 1-16 trong số 48 sản phẩm</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <span className="text-sm mr-2">Sắp xếp theo:</span>
                  <Select defaultValue="newest">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sắp xếp theo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Mới nhất</SelectItem>
                      <SelectItem value="price-asc">Giá: Thấp đến cao</SelectItem>
                      <SelectItem value="price-desc">Giá: Cao đến thấp</SelectItem>
                      <SelectItem value="popular">Phổ biến nhất</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="hidden sm:flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Grid3X3 className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Products grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {allProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <Link href={`/san-pham/${product.id}`} className="block">
                    <div className="aspect-square relative overflow-hidden bg-muted">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.discount > 0 && (
                        <Badge className="absolute top-2 right-2 bg-destructive">-{product.discount}%</Badge>
                      )}
                      {product.isNew && <Badge className="absolute top-2 left-2 bg-primary">Mới</Badge>}
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <div>
                          {product.discount > 0 ? (
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-lg">
                                {((product.price * (100 - product.discount)) / 100).toLocaleString("vi-VN")}₫
                              </span>
                              <span className="text-sm text-muted-foreground line-through">
                                {product.price.toLocaleString("vi-VN")}₫
                              </span>
                            </div>
                          ) : (
                            <span className="font-bold text-lg">{product.price.toLocaleString("vi-VN")}₫</span>
                          )}
                        </div>
                        <Button size="sm" className="rounded-full">
                          Mua ngay
                        </Button>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center gap-1">
                <Button variant="outline" size="icon" disabled>
                  <ChevronDown className="h-4 w-4 rotate-90" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-primary text-primary-foreground">
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  2
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  3
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronDown className="h-4 w-4 -rotate-90" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Sample data
const categories = [
  { id: 1, name: "Cà vạt cổ điển" },
  { id: 2, name: "Cà vạt họa tiết" },
  { id: 3, name: "Cà vạt sọc" },
  { id: 4, name: "Cà vạt đơn sắc" },
  { id: 5, name: "Cà vạt hẹp" },
  { id: 6, name: "Nơ cổ" },
]

const colors = [
  { id: 1, name: "Đen", hex: "#000000" },
  { id: 2, name: "Xanh navy", hex: "#0a2463" },
  { id: 3, name: "Đỏ đô", hex: "#8b0000" },
  { id: 4, name: "Xám", hex: "#808080" },
  { id: 5, name: "Xanh lá", hex: "#006400" },
  { id: 6, name: "Tím", hex: "#4b0082" },
  { id: 7, name: "Vàng", hex: "#ffd700" },
  { id: 8, name: "Hồng", hex: "#ff69b4" },
]

const materials = [
  { id: 1, name: "Lụa tơ tằm" },
  { id: 2, name: "Polyester" },
  { id: 3, name: "Cotton" },
  { id: 4, name: "Len" },
  { id: 5, name: "Lụa pha" },
]

const allProducts = [
  {
    id: 1,
    name: "Cà vạt lụa đen cổ điển",
    description: "Cà vạt lụa màu đen thanh lịch, phù hợp với mọi trang phục",
    price: 850000,
    image: "/images/products/tie-black.jpg",
    isNew: true,
    discount: 0,
  },
  {
    id: 2,
    name: "Cà vạt sọc xanh navy",
    description: "Cà vạt sọc xanh navy sang trọng, thích hợp cho các buổi họp",
    price: 750000,
    image: "/images/products/tie-navy.jpg",
    isNew: false,
    discount: 15,
  },
  {
    id: 3,
    name: "Cà vạt lụa họa tiết",
    description: "Cà vạt lụa với họa tiết tinh tế, tạo điểm nhấn cho trang phục",
    price: 950000,
    image: "/images/products/tie-pattern.jpeg",
    isNew: true,
    discount: 0,
  },
  {
    id: 4,
    name: "Cà vạt lụa đỏ đô",
    description: "Cà vạt lụa màu đỏ đô sang trọng, thể hiện sự tự tin",
    price: 780000,
    image: "/images/products/tie-red.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 5,
    name: "Cà vạt kẻ sọc xám",
    description: "Cà vạt kẻ sọc xám tinh tế, dễ dàng kết hợp với nhiều trang phục",
    price: 680000,
    image: "/images/products/tie-gray.jpg",
    isNew: false,
    discount: 10,
  },
  {
    id: 6,
    name: "Cà vạt lụa hoa văn",
    description: "Cà vạt lụa với hoa văn độc đáo, tạo điểm nhấn cho trang phục",
    price: 920000,
    image: "/images/products/tie-floral.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 7,
    name: "Cà vạt len xanh lá",
    description: "Cà vạt len màu xanh lá ấm áp, phù hợp cho mùa đông",
    price: 720000,
    image: "/images/products/tie-green.jpeg",
    isNew: true,
    discount: 0,
  },
  {
    id: 8,
    name: "Cà vạt hẹp đen",
    description: "Cà vạt hẹp màu đen hiện đại, phù hợp với phong cách trẻ trung",
    price: 580000,
    image: "/images/products/tie-slim.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 9,
    name: "Cà vạt lụa chấm bi",
    description: "Cà vạt lụa với họa tiết chấm bi tinh tế, tạo vẻ lịch lãm",
    price: 850000,
    image: "/images/products/tie-dots.jpg",
    isNew: false,
    discount: 20,
  },
  {
    id: 10,
    name: "Cà vạt lụa tím",
    description: "Cà vạt lụa màu tím sang trọng, thể hiện phong cách độc đáo",
    price: 790000,
    image: "/images/products/tie-purple.jpg",
    isNew: false,
    discount: 0,
  },
  {
    id: 11,
    name: "Cà vạt cotton kẻ ô",
    description: "Cà vạt cotton với họa tiết kẻ ô trẻ trung, phù hợp cho các dịp thường ngày",
    price: 650000,
    image: "/images/products/tie-checkered.jpeg",
    isNew: true,
    discount: 0,
  },
  {
    id: 12,
    name: "Nơ cổ đen",
    description: "Nơ cổ đen thanh lịch, phù hợp cho các sự kiện trang trọng",
    price: 480000,
    image: "/images/products/bow-tie.jpg",
    isNew: false,
    discount: 0,
  },
]

