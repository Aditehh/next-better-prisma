import prisma from "@/lib/db"

async function main() {
    const blogPost = [{
        // id: 1,
        slug: "learn-reactjs-basics",
        title: "learn React.js Basics",
        content: `Learn React.js Complex things
Next.js is a popular React framework that helps you build fast and SEO-friendly websites.

      ## Why use Next.js?
      - Built-in routing system
      - Server-side rendering and static generation
      - Great developer experience

      `
    },
    ]

    for (const post of blogPost) {
        await prisma.blogPost.create({
            data: post,
        })
    }

}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });