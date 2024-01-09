--
-- Location
INSERT INTO location (
    city,
    state_abbr,
    state_full,
    country_abbr,
    country_full
  )
VALUES (
    'Severna Park',
    'MD',
    'Maryland',
    'USA',
    'United States of America'
  );
--
-- Users
INSERT INTO users (
    first_name,
    middle_name,
    last_name,
    email,
    phone,
    location_id
  )
VALUES (
    'derek',
    'michael',
    'gygax',
    'derekgygax@gmail.com',
    '+14107778985',
    1
  );
--
-- User Details
INSERT INTO user_detail (summary, image_alt, user_id)
VALUES (
    'Experienced full stack software developer. Graduated from Virginia Commonwealth University with a MS in Human and Molecular Genetics, and from the College of William and Mary with a BS in Biology. Over 7 years experience as a Bioinformatics Developer and Software Engineer. Traveled abroad while continuing to develop and maintain bioinformatic software and web applications. I have the software development and database design/interaction experience to develop complex computational algorithms. Seeking a challenging position as a software developer where I can develop software with a team in a remote atmosphere, using my skills as an experienced software engineer.',
    'Derek Gygax doing a handstand with a beautiful view.',
    1
  );
--
-- User Bio
INSERT INTO user_bio (type, text, user_details_id)
VALUES (
    'work',
    'I started out as a biologist, specifically genetics, and studied my way to obtaining a Masters in Human and Molecular Genetics. While studying for my masters I had to learn to code as the world of genetics is a huge sum of data. I continued down the road of coding and became a bioinformatician and then eventually jumped back and forth between bioinformatics and software development. Nowadays I tend to focus more on software development, but still love bioinformatics when the opporunity arises.',
    1
  ),
  (
    'personal',
    'Outside of work I enjoy seeing new places and having as many experiences I can. My passion is gymnastics and I''ll do a handstand any chance I get.',
    1
  );
--
-- Jobs
INSERT INTO job (title)
VALUES ('Software Engineer'),
  ('Bioinformatics Engineer');
--
-- Project Link
INSERT INTO project_link (tooltip, label)
VALUES (
    'Click to visit the {PROJECT_TITLE} website',
    'View Website'
  ),
  (
    'Click to view details about the {PROJECT_TITLE} project',
    'View Project Details'
  );
--
-- User Jobs
INSERT INTO user_job (user_id, job_title)
VALUES (1, 'Software Engineer'),
  (1, 'Bioinformatics Engineer');
--
-- Project
-- -- 57West
INSERT INTO project (
    name,
    url,
    current_project,
    display_order,
    project_links_id
  )
VALUES (
    'fiftySevenWest',
    'https://57west.us/',
    false,
    1,
    1
  ),
  -- Mendelgen
  (
    'mendelgen',
    'https://mendelgen.com/',
    false,
    2,
    1
  ),
  -- Library of Congress
  ('loc', 'https://www.loc.gov/', false, 3, 1),
  -- Copyright Offic
  (
    'copyright',
    'https://record.copyright.gov/remitter-portal/remitter-dash',
    false,
    4,
    1
  ),
  -- RPPA
  ('rppa', '/project/rppa', false, 5, 2),
  -- CRAVAT
  (
    'cravat',
    'https://cravat.us/CRAVAT/',
    false,
    6,
    1
  ),
  -- MuPIT
  (
    'mupit',
    'https://mupit.icm.jhu.edu/MuPIT_Interactive/',
    false,
    7,
    1
  ),
  -- Portfoli
  ('portfolio', '/', true, 8, 1);
--
-- Project Details
-- fiftySevenWest
INSERT INTO project_detail (
    title,
    job_title,
    summary,
    img_alt,
    project_id
  )
VALUES (
    '57 West',
    'Software Engineer',
    'Promotional webpage for 57 West Capital Advisors, designed to attract customers interested in fiduciary services and actively managed equity portfolios. Provides visitors with a smooth experience, easily connecting them with company info, contact options, and a detailed look at services offered.',
    '57 West website for building Custom Stock Porfolios.',
    1
  ),
  (
    'Mendelgen',
    'Bioinformatics Engineer',
    'Mendelgen is an online sequence editing and manipulation tool, encompassing all essential features for simulating genetic experiments such as DNA digests, primer design, and translation features. My contributions to this innovative platform include developing the DNA cloning and PCR simulations, and enhancing Redux implementations to support these features.',
    'Mendelgen, site used for performing simulations of genetic assays such as DNA cloning or PCR.',
    2
  ),
  (
    'Library of Congress',
    'Software Engineer',
    'The Library of Congress (LOC) webpage offers extensive web archives. I developed and maintained web applications to optimize user access to these archives, streamlining search functionalities and enhancing user experience.',
    'loc.gov website on the newspapers section for searching American archives.',
    3
  ),
  (
    'Copyright Recordation',
    'Software Engineer',
    'The U.S. Copyright Office''s recordation webpage facilitates the filing and indexing of documents such as transfers of copyright ownership and notices of termination. Once indexed, these documents are available for public inspection.',
    'Copyright Recordation site for submitting and processing copyrights.',
    4
  ),
  (
    'RPPA',
    'Bioinformatics Engineer',
    'Private web-based pipeline for MD Anderson Cancer Center''s RPPA (Reverse Phase Protein Array) core, automating the analysis of protein levels in tumor tissue and cultured cells. This technology provides crucial insights for cancer research, drug development, and systems biology analyses.',
    'MD Anderson Cancer Center logo.',
    5
  ),
  (
    'CRAVAT',
    'Bioinformatics Engineer',
    'CRAVAT (Cancer-Related Analysis of Variants Toolkit) is a comprehensive genomic analysis platform that streamlines the process of submitting large sets of genomic variants, such as single base substitutions and indels, for  impact analysis, scoring, and annotation. The platform''s interactive viewer allows users to  identify and investigate potential pathogenic or cancer driving variants.',
    'CRAVAT, Cancer-Related Analysis of Variants Toolkit, site for processing genome variants and their relation to cancer.',
    6
  ),
  (
    'MuPIT',
    'Bioinformatics Engineer',
    'MuPIT (Mutation Position Imaging Toolbox) is an interactive web-based tool that maps human genomic coordinates to three-dimensional protein structures from the Protein Data Bank (PDB). Users can easily visualize the spatial context of genomic variations by inputting genomic coordinates, PDB IDs, or features, and receive corresponding PDB positions, lists of features, or data for "painting" protein structures.',
    'MuPIT, Mutation Position Imaging Toolbox, site used for viewing proteins.',
    7
  ),
  (
    'Portfolio',
    'Software Engineer',
    'Portfolio website to showcase my skills and abilities. Built with Next.js and TypeScript, and styled with Tailwind CSS. This framework boosts SEO and performance, streamlines design processes, and guarantees a cohesive user interface.',
    'Derek Gygax''s portfolio website, showcasing his professional skills and abilities.',
    8
  );
--
-- Project Metadata
INSERT INTO project_metadata (title, description, keywords, project_id)
VALUES ('57 West', '', '', 1),
  ('Mendelgen', '', '', 2),
  ('Library of Congress', '', '', 3),
  ('Copyright Recordation', '', '', 4),
  ('RPPA', '', '', 5),
  ('CRAVAT', '', '', 6),
  ('MuPIT', '', '', 7),
  ('Portfolio', '', '', 8);
--
-- Icon Alt
INSERT INTO icon_alt (text)
VALUES ('Icon for {ICON_NAME}'),
  ('Link to {USER_NAME}''s email {USER_EMAIL}'),
  ('Link to {USER_NAME}''s github'),
  ('Link to {USER_NAME}''s linkedIn'),
  ('Icon for map location'),
  (
    'Link to call {USER_NAME}''s phone number {USER_PHONE}'
  ),
  ('Click to visit the website'),
  ('Click to download');
--
-- Icons
INSERT INTO icon (name, icon_alt_id)
VALUES ('angular', 1),
  ('aws', 1),
  ('django', 1),
  ('docker', 1),
  ('download', 8),
  ('email', 2),
  ('flask', 1),
  ('github', 3),
  ('html', 1),
  ('java', 1),
  ('javascript', 1),
  ('linkedIn', 4),
  ('mappin', 5),
  ('mysql', 1),
  ('nextjs', 1),
  ('phone', 6),
  ('python', 1),
  ('r', 1),
  ('react', 1),
  ('redux', 1),
  ('sass', 1),
  ('solr', 1),
  ('tailwind', 1),
  ('typescript', 1),
  ('website', 7);
--
-- Icon Tooltip
INSERT INTO icon_tooltip (name, tooltip)
VALUES ('angular', 'Angular'),
  ('aws', 'AWS'),
  ('django', 'Django'),
  ('docker', 'Docker'),
  ('download', 'Click to download'),
  (
    'email',
    'Click to send an email to {USER_NAME} at {USER_EMAIL}'
  ),
  ('flask', 'Flask'),
  (
    'github',
    'Click to visit {USER_NAME}''s github'
  ),
  ('html', 'HTML'),
  ('java', 'Java'),
  ('javascript', 'Javascript'),
  (
    'linkedIn',
    'Click to visit {USER_NAME}''s LinkedIn'
  ),
  ('mappin', 'MapPin'),
  ('mysql', 'Mysql'),
  ('nextjs', 'Next.js'),
  (
    'phone',
    'Click to call {USER_NAME}''s phone number {USER_PHONE}'
  ),
  ('python', 'Python'),
  ('r', 'R'),
  ('react', 'React'),
  ('redux', 'Redux'),
  ('sass', 'Sass'),
  ('solr', 'Solr'),
  ('tailwind', 'Tailwind'),
  ('typescript', 'TypeScript'),
  ('website', 'Click to visit the website');
--
-- Project Icons
INSERT INTO project_icon (project_id, icon_name)
VALUES (8, 'nextjs'),
  (8, 'typescript'),
  (8, 'tailwind'),
  (1, 'nextjs'),
  (1, 'typescript'),
  (1, 'sass'),
  (2, 'react'),
  (2, 'redux'),
  (3, 'django'),
  (3, 'flask'),
  (3, 'python'),
  (3, 'solr'),
  (4, 'angular'),
  (4, 'java'),
  (4, 'aws'),
  (4, 'docker'),
  (5, 'java'),
  (5, 'python'),
  (5, 'javascript'),
  (5, 'r'),
  (5, 'mysql'),
  (5, 'docker'),
  (6, 'java'),
  (6, 'python'),
  (6, 'javascript'),
  (6, 'mysql'),
  (6, 'docker'),
  (7, 'java'),
  (7, 'python'),
  (7, 'javascript'),
  (7, 'mysql'),
  (7, 'docker');
--
-- User Projects
INSERT INTO user_project (user_id, project_id)
VALUES (1, 1),
  (1, 2),
  (1, 3),
  (1, 4),
  (1, 5),
  (1, 6),
  (1, 7),
  (1, 8);
--
-- Contact Me Button
INSERT INTO contact_me_button (label, tooltip)
VALUES (
    'Contact Me',
    'Click to send an email to {USER_NAME} at {USER_EMAIL}'
  )