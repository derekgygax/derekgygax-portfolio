-- TODO A LOT Of
--   NOT NULL
-- missing
--
-- User
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(20) NOT NULL,
  middle_name VARCHAR(20),
  last_name VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  phone VARCHAR(25) NOT NULL UNIQUE
);
--
-- Jobs - For Job Titles
CREATE TABLE job (title VARCHAR(50) PRIMARY KEY);
--
-- Project Links - the link to the project website or more details
CREATE TABLE project_link (
  id SERIAL PRIMARY KEY,
  -- The tool tip when you hover over a project
  tooltip VARCHAR(100) NOT NULL,
  -- The project can be clicked to go to the webpage. This is a large word telling you in plain view you can do this (similar to tool tip)
  label VARCHAR(100) NOT NULL
);
--
-- Linking table users and job
CREATE TABLE user_job (
  user_id INT REFERENCES users (id) ON DELETE CASCADE,
  job_title VARCHAR(50) REFERENCES job (title) ON DELETE RESTRICT ON UPDATE CASCADE,
  PRIMARY KEY (user_id, job_title)
);
--
-- Projects
CREATE TABLE project (
  -- MySQL
  -- id INT PRIMARY KEY AUTO_INCREMENT,
  -- POSTGRES
  id SERIAL PRIMARY KEY,
  -- name of the project for internal id things
  name VARCHAR(50) NOT NULL,
  -- URL for the project, to the webpage (or more details)
  url VARCHAR(300) NOT NULL,
  -- boolean to say this project is the same one the DB is used for
  current_project boolean NOT NULL,
  -- Order displayed on the portfolio page
  display_order SMALLINT NOT NULL,
  -- Reference to the tool tip used when hovering over the project
  project_links_id INT NOT NULL REFERENCES project_link (id) ON DELETE RESTRICT
);
--
-- Project Details
CREATE TABLE project_detail (
  id SERIAL PRIMARY KEY,
  -- Title of the project for display
  title VARCHAR(100) NOT NULL,
  -- The job you had for the project
  job_title VARCHAR(50) NOT NULL REFERENCES job (title) ON DELETE RESTRICT ON UPDATE CASCADE,
  -- A quick summary of the project
  summary TEXT NOT NULL,
  -- The project has an image. This is what is displayed if the image doesn't load
  img_alt TEXT NOT NULL,
  -- Foreign key referencing the project id
  project_id INT NOT NULL REFERENCES project (id) ON DELETE CASCADE
);
--
-- Project Metadata
CREATE TABLE project_metadata (
  id SERIAL PRIMARY KEY,
  -- Title of the project for metadata (page title at top of tab)
  title VARCHAR(100) NOT NULL,
  -- Description of the project for metadata
  description VARCHAR(200) NOT NULL,
  -- Keywords of the project for metadata
  keywords VARCHAR(200) NOT NULL,
  -- Foreign key referencing the project id
  project_id INT NOT NULL REFERENCES project (id) ON DELETE CASCADE
);
--
-- Icons Alt wording
CREATE TABLE icon_alt (
  id SERIAL PRIMARY KEY,
  text VARCHAR(100) NOT NULL
);
--
-- Icons
CREATE TABLE icon (
  name VARCHAR(20) PRIMARY KEY,
  tooltip VARCHAR(100) NOT NULL,
  icon_alt_id INT REFERENCES icon_alt (id) ON DELETE RESTRICT
);
--
-- Linking table between the icon and the project that use them
CREATE TABLE project_icon (
  project_id INT REFERENCES project (id) ON DELETE CASCADE,
  icon_name VARCHAR(20) REFERENCES icon (name) ON DELETE CASCADE,
  PRIMARY KEY (project_id, icon_name)
);
--
-- Linking table between the users and the project they work on
CREATE TABLE user_project (
  user_id INT REFERENCES users (id) ON DELETE CASCADE,
  project_id INT REFERENCES project (id) ON DELETE CASCADE,
  PRIMARY KEY (user_id, project_id)
);