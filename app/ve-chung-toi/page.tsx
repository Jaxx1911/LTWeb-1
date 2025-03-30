import Image from "next/image"
import { Users, Award, Clock, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <>
      <div className="bg-primary/5 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Về chúng tôi</h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            Câu chuyện về CàVạtVN và hành trình mang đến những sản phẩm cà vạt cao cấp cho quý ông Việt Nam
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Our story */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Câu chuyện của chúng tôi</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                CàVạtVN được thành lập vào năm 2010 bởi nhà thiết kế Nguyễn Văn An với mong muốn mang đến những sản phẩm
                cà vạt cao cấp, được thiết kế và sản xuất tại Việt Nam, cho các quý ông Việt Nam.
              </p>
              <p>
                Xuất phát từ niềm đam mê với thời trang và sự tinh tế trong từng chi tiết, chúng tôi đã không ngừng
                nghiên cứu và phát triển để tạo ra những sản phẩm cà vạt không chỉ đẹp về mặt thẩm mỹ mà còn chất lượng
                về mặt chất liệu và kỹ thuật.
              </p>
              <p>
                Sau hơn 15 năm hoạt động, CàVạtVN đã trở thành thương hiệu uy tín và được yêu thích bởi nhiều quý ông
                Việt Nam. Chúng tôi tự hào là đơn vị tiên phong trong việc sản xuất cà vạt cao cấp tại Việt Nam, góp
                phần nâng cao giá trị của ngành thời trang Việt Nam trên thị trường quốc tế.
              </p>
            </div>
            <div className="mt-6">
              <Button className="rounded-full">Tìm hiểu thêm</Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <Image src="/images/our-story.jpg" alt="Câu chuyện của chúng tôi" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg w-48">
              <p className="font-bold text-lg">Thành lập</p>
              <p className="text-3xl font-bold text-primary">2010</p>
            </div>
          </div>
        </div>

        {/* Our values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Giá trị cốt lõi</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Our team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Đội ngũ của chúng tôi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm group">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-primary mb-3">{member.position}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Milestones */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Cột mốc phát triển</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                >
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                  <div className="w-1/2 bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="font-bold text-xl mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Trở thành một phần của câu chuyện</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Chúng tôi luôn tìm kiếm những cơ hội hợp tác và phát triển. Nếu bạn quan tâm đến sản phẩm của chúng tôi hoặc
            muốn hợp tác, hãy liên hệ với chúng tôi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="rounded-full">
              Liên hệ ngay
            </Button>
            <Button size="lg" variant="outline" className="rounded-full">
              Xem sản phẩm
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

// Sample data
const values = [
  {
    title: "Chất lượng",
    description: "Chúng tôi cam kết mang đến những sản phẩm chất lượng cao nhất, từ chất liệu đến kỹ thuật sản xuất.",
    icon: Award,
  },
  {
    title: "Sáng tạo",
    description:
      "Chúng tôi không ngừng sáng tạo và đổi mới để mang đến những thiết kế độc đáo và phù hợp với xu hướng.",
    icon: Sparkles,
  },
  {
    title: "Tận tâm",
    description: "Chúng tôi luôn đặt khách hàng lên hàng đầu và tận tâm phục vụ để mang đến trải nghiệm tốt nhất.",
    icon: Users,
  },
  {
    title: "Bền vững",
    description: "Chúng tôi cam kết phát triển bền vững, tôn trọng môi trường và xã hội trong mọi hoạt động.",
    icon: Clock,
  },
]

const team = [
  {
    name: "Nguyễn Văn An",
    position: "Nhà sáng lập & CEO",
    bio: "Với hơn 20 năm kinh nghiệm trong ngành thời trang, anh An là người đặt nền móng và định hướng phát triển cho CàVạtVN.",
    image: "/images/team/founder.jpg",
  },
  {
    name: "Trần Đỗ Bình",
    position: "Giám đốc thiết kế",
    bio: "Anh Bình là người đứng sau những thiết kế độc đáo và sáng tạo của CàVạtVN, với niềm đam mê bất tận với thời trang.",
    image: "/images/team/designer.JPG",
  },
  {
    name: "Lê Văn Cường",
    position: "Giám đốc sản xuất",
    bio: "Anh Cường chịu trách nhiệm đảm bảo mọi sản phẩm của CàVạtVN đều đạt chuẩn chất lượng cao nhất trước khi đến tay khách hàng.",
    image: "/images/team/production.jpeg",
  },
]

const milestones = [
  {
    year: 2010,
    title: "Thành lập CàVạtVN",
    description: "CàVạtVN được thành lập bởi nhà thiết kế Nguyễn Văn An tại TP. Hồ Chí Minh.",
  },
  {
    year: 2013,
    title: "Mở rộng thị trường",
    description:
      "CàVạtVN mở rộng thị trường ra các tỉnh thành lớn trong cả nước và bắt đầu xuất khẩu sang các nước trong khu vực.",
  },
  {
    year: 2016,
    title: "Ra mắt dòng sản phẩm cao cấp",
    description:
      "CàVạtVN ra mắt dòng sản phẩm cà vạt lụa tơ tằm cao cấp, đánh dấu bước ngoặt trong phát triển thương hiệu.",
  },
  {
    year: 2020,
    title: "Kỷ niệm 10 năm thành lập",
    description: "CàVạtVN kỷ niệm 10 năm thành lập và ra mắt bộ sưu tập đặc biệt kỷ niệm 10 năm.",
  },
  {
    year: 2023,
    title: "Mở rộng sang thị trường quốc tế",
    description: "CàVạtVN chính thức mở rộng sang thị trường quốc tế với các cửa hàng tại Singapore và Thái Lan.",
  },
]

