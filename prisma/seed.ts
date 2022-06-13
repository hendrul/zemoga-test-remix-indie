import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  // cleanup the existing database
  await prisma.vote.delete({ where: {} }).catch(() => {
    // no worries if it doesn't exist yet
  });

  [
    {
      name: "Kanye West",
      description:
        "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
      category: "entertainment",
      picture: "kanye.png",
      // createdAt: "2020-03-10T23:08:57.892Z",
      // updatedAt: "2020-03-10T23:08:57.892Z",
      positiveVotes: 23,
      negativeVotes: 36,
    },
    {
      name: "Mark Zuckerberg",
      description:
        "Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.",
      category: "business",
      picture: "mark.png",
      // createdAt: "2021-02-14T23:10:19.134Z",
      // updatedAt: "2021-02-14T23:10:19.134Z",
      positiveVotes: 418,
      negativeVotes: 324,
    },
    {
      name: "Cristina Fernández de Kirchner",
      description:
        "Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.",
      category: "politics",
      picture: "cristina.png",
      // createdAt: "2020-12-10T23:41:07.120Z",
      // updatedAt: "2020-12-10T23:41:07.120Z",
      positiveVotes: 45,
      negativeVotes: 97,
    },
    {
      name: "Malala Yousafzai",
      description:
        "The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.",
      category: "politics",
      picture: "malala.png",
      // createdAt: "2020-12-10T23:41:07.120Z",
      // updatedAt: "2020-12-10T23:41:07.120Z",
      positiveVotes: 18,
      negativeVotes: 3,
    },
    {
      name: "Elon Musk",
      description:
        "In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer.",
      category: "business",
      picture: "elon.png",
      // createdAt: "2020-12-20T23:43:38.041Z",
      // updatedAt: "2020-12-20T23:43:38.041Z",
      positiveVotes: 1237,
      negativeVotes: 894,
    },
    {
      name: "Greta Thumberg",
      description:
        "Thunberg's activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint.",
      category: "environment",
      picture: "greta.png",
      // createdAt: "2021-02-26T23:44:50.326Z",
      // updatedAt: "2021-02-26T23:44:50.326Z",
      positiveVotes: 118,
      negativeVotes: 45,
    },
  ].forEach(async (vote) => {
    await prisma.vote.create({
      data: vote,
    });
  });

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
