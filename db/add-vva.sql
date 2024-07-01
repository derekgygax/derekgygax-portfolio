-- Metadata, this makes it 10
INSERT INTO metadata (title, description, keywords)
VALUES ('{USER_FULL_NAME} | VVA', '', '');
--
-- Project
INSERT INTO project (
    name,
    url,
    current_project,
    display_order,
    project_link_id
  )
VALUES (
    'vva',
    'https://www.vva.us/',
    false,
    9,
    1
  );
--
-- Project Details
INSERT INTO project_detail (
    title,
    job_title,
    summary,
    img_alt,
    project_id
  )
VALUES (
    'Voters Voice Amendment (VVA)',
    'Software Engineer',
    'The Voters Voice Amendment webpage is a pilot webpage to simulate the initiation and voting by individuals on federal and state law proposals, bypassing traditional legislative pathways.',
    'Voters Voice Amendment website piloting the initiation and voting by individuals on federal and state law proposals, bypassing traditional legislative pathways',
    9
  );
--
-- project metadata
INSERT INTO project_metadata (metadata_id, project_id)
VALUES (10, 9);
--
-- Project Icons
INSERT INTO project_icon (project_id, icon_name)
VALUES (9, 'typescript'),
  (9, 'nextjs'),
  (9, 'sass'),
  (9, 'postgresql'),
  (9, 'prisma');
--
-- User Projects
INSERT INTO user_project (user_id, project_id)
VALUES (1, 9);