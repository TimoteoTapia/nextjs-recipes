-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'VENDOR');

-- CreateTable
CREATE TABLE "UserRecipes" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "middleName" TEXT,
    "lastName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "image" TEXT,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserRecipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductRecipes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "image" TEXT,
    "stock" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ProductRecipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewRecipes" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "ReviewRecipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryRecipes" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategoryRecipes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryRecipesToProductRecipes" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "UserRecipes_email_key" ON "UserRecipes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryRecipesToProductRecipes_AB_unique" ON "_CategoryRecipesToProductRecipes"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryRecipesToProductRecipes_B_index" ON "_CategoryRecipesToProductRecipes"("B");

-- AddForeignKey
ALTER TABLE "ProductRecipes" ADD CONSTRAINT "ProductRecipes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserRecipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewRecipes" ADD CONSTRAINT "ReviewRecipes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserRecipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewRecipes" ADD CONSTRAINT "ReviewRecipes_productId_fkey" FOREIGN KEY ("productId") REFERENCES "ProductRecipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryRecipesToProductRecipes" ADD CONSTRAINT "_CategoryRecipesToProductRecipes_A_fkey" FOREIGN KEY ("A") REFERENCES "CategoryRecipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryRecipesToProductRecipes" ADD CONSTRAINT "_CategoryRecipesToProductRecipes_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductRecipes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
