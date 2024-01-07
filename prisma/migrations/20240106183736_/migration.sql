-- CreateTable
CREATE TABLE "icon_alt" (
    "id" SERIAL NOT NULL,
    "text" VARCHAR(100) NOT NULL,

    CONSTRAINT "icon_alt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "icons" (
    "name" VARCHAR(20) NOT NULL,
    "tooltip" VARCHAR(100) NOT NULL,
    "icon_alt_id" INTEGER,

    CONSTRAINT "icons_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "project_details" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "role_title" VARCHAR(50) NOT NULL,
    "summary" TEXT NOT NULL,
    "img_alt" TEXT NOT NULL,
    "project_id" INTEGER,

    CONSTRAINT "project_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project_icons" (
    "project_id" INTEGER NOT NULL,
    "icon_name" VARCHAR(20) NOT NULL,

    CONSTRAINT "project_icons_pkey" PRIMARY KEY ("project_id","icon_name")
);

-- CreateTable
CREATE TABLE "project_links" (
    "id" SERIAL NOT NULL,
    "tooltip" VARCHAR(100) NOT NULL,
    "label" VARCHAR(100) NOT NULL,

    CONSTRAINT "project_links_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "url" VARCHAR(300) NOT NULL,
    "current_project" BOOLEAN NOT NULL,
    "display_order" SMALLINT NOT NULL,
    "project_links_id" INTEGER,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "title" VARCHAR(50) NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("title")
);

-- CreateTable
CREATE TABLE "user_projects" (
    "user_id" INTEGER NOT NULL,
    "project_id" INTEGER NOT NULL,

    CONSTRAINT "user_projects_pkey" PRIMARY KEY ("user_id","project_id")
);

-- CreateTable
CREATE TABLE "user_roles" (
    "user_id" INTEGER NOT NULL,
    "role_title" VARCHAR(50) NOT NULL,

    CONSTRAINT "user_roles_pkey" PRIMARY KEY ("user_id","role_title")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(20) NOT NULL,
    "middle_name" VARCHAR(20),
    "last_name" VARCHAR(20) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "phone" VARCHAR(25) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- AddForeignKey
ALTER TABLE "icons" ADD CONSTRAINT "icons_icon_alt_id_fkey" FOREIGN KEY ("icon_alt_id") REFERENCES "icon_alt"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_details" ADD CONSTRAINT "project_details_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_details" ADD CONSTRAINT "project_details_role_title_fkey" FOREIGN KEY ("role_title") REFERENCES "roles"("title") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "project_icons" ADD CONSTRAINT "project_icons_icon_name_fkey" FOREIGN KEY ("icon_name") REFERENCES "icons"("name") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "project_icons" ADD CONSTRAINT "project_icons_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_project_links_id_fkey" FOREIGN KEY ("project_links_id") REFERENCES "project_links"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_projects" ADD CONSTRAINT "user_projects_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_projects" ADD CONSTRAINT "user_projects_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_role_title_fkey" FOREIGN KEY ("role_title") REFERENCES "roles"("title") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_roles" ADD CONSTRAINT "user_roles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
