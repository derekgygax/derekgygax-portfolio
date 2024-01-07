/*
  Warnings:

  - Made the column `icon_alt_id` on table `icons` required. This step will fail if there are existing NULL values in that column.
  - Made the column `project_id` on table `project_details` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "icons" ALTER COLUMN "icon_alt_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "project_details" ALTER COLUMN "project_id" SET NOT NULL;

-- CreateTable
CREATE TABLE "project_metadata" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "keywords" VARCHAR(200) NOT NULL,
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "project_metadata_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "project_metadata" ADD CONSTRAINT "project_metadata_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
