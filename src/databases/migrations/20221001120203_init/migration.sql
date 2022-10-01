-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "parent_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_user_id_key" ON "user"("user_id");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
