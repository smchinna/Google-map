# Change Log

## 11/1/2017
- Removed back button from app

## 10/19/2017
- Integrated Bulma components into header

## 10/15/2017
- Continued removing Bootstrap from project
- Installed PureCSS

## 10/14/2017
- Removing Bootstrap components from project

## 10/12/2017
- Reworked roleSelect to redirect to given endRoute after role selection, hooked up SkillTrendsTile to pass props for utilizing endRoute
- - Need to apply to HiringTrendsTile and FitScoreTile

## 10/11/2017
- Set hiring trends and skill trends to require input from the role selector

## 10/10/2017
- Conformed role description saga to the updated endpoint format

## 10/04/2017
- Attached SkillTrends to API endpoint
- Set Role Description blurb endpoint
- Disabled role description skill clicking
- Removed Bootstrap from SeeMore

## 09/19/2017
- Raised role selection state to global App level
- Set Fit Score tile to require selected roles and redirect to selection if length === 0

## 09/18/2017
- Set role description's "CHECK FIT" button to redirect to E&I module

## 09/14/2017
- Added hero images to codebase
- Set up dynamic selectors for all dashboard tiles, still need business logic for some
- Set up Dashboard status for dynamic Hero image

## 09/13/2017
- Dynamic display of Alternative Paths module status on Dashboard
- Dynamic display of V-Score update date on Dashboard tile

## 09/12/2017
- Dynamic display of V-Score/Engagement module status on Dashboard

## 09/09/2017
- Made vScore available to global state through userData.status.vScore

## 09/06/2017
 - Removed the npm-debug.log.2497068002 file from project module.
 - Added the nil handling for role with no skill.
 - Solved a text blur issue for drag card info screen.
 - Converted the CustomDragLayer component to pure component.
 - Added enter key support for submitting multiple roles screen.
 - Removed typo showFunnelAnimaiton ~> showFunnelAnimation.
 - Solved the open feedback screen issue for E&I module.
 - Removed the unused style.scss file from Slider component.
 - Solved the undo assessment issue.
 - Added the doc for functions and methods.
 - Added dynamic support for showing user selected roles on fit assessment screen of E&I module.
 
## 09/06/2017
 - Merge the 'master' branch with 'api-integrations' branch.
 - Added the 'delete' API support for edit profile screen.
 - Updated the version of 'redux-saga' (0.14.0 ~> ^0.15.6).
 - Integrated the get role details API.
 - Integrated the get skill details API.
 - Began setting up dynamic Engagement dashboard tile
 
## 09/05/2017
- Added the 'roleSelection' route to the module.
- Working on to implement the select multiple roles functionality.
- Completed the roleSelection related changes for E&I module.
- Need to hookup API call for get E&I dashboard/module data.

## 09/04/2017
- Updated the calculation part of the Fit score module.
- Completed and migrated the Fit score module to role based instead of skill based.
- Removed Bootstrap usage from Dashboard (applying pattern)
- Moved Dashboard styles to './styles.js' file (applying pattern)
- Implemented generic dynamic tile content based on status

## 08/31/2017
- Updated the naming for E&I view 
`dashboardViewFor ~> EAndIViewFor`
- Added the Fit Assessment screen for E&I module.
- Updated the implementation for save assessment method.
- Added support for 'react-keydown' module to support key press events.
- Added support for escape key support for drag info card.
- Started working on changes for Fit score module
   - Updated the mock data for E&I module.
   - Updated the naming for drag card
      `fruitTitle ~> cardTitle`

## 08/30/2017
- Updated the implementation for drag card scaling animation.
- Solved some known UI issues.
- Added the drag card moving up animation.
- Hide the next card on E&I module for last skill.
- Added custom cards for all known dashboard tiles.
- Added the submit assessment API to the module.
- Updated the implementation for loader hoc.
- Working on to add a delete assessment API to the module.

## 08/28/2017
- Solved Graph issue on FireFox.
- Solved issues found on IE.
- Solved issue of "Done" button on user-feedback screen.
- Solved cropping of Slider gripper issue.

## 08/28/2017
- Solved "DONE" button issue of edit-feedback screen.
- Solved scrolling issue.
- Updated the bucket droppable section.

## 08/24/2017
- Added the support for hiring trend screen.
- Added the support for skill trend screen.

## 08/23/2017
- Reverted the version of React and React-Dom (15.6.1 ~> 15.4.1 )
- Updated the version of React and React-Dom (15.4.1 ~> 15.6.1)
- Completed the Fit score feature

## 08/22/2017
- Added the support to overlap the graph points and set the zIndex of the same with respect to the fit score of the point.

## 08/19/2017
- Added the support for edit feedback screen.
- Added the support for reposition on long touch feature.
- Added HOC to handle the empty data condition.
- Commented the code for shrinking the drag card on drag event.

## 08/16/2017
- Merge the master into the 'support-fit-scores' branch
- Completed the Fit Score feature. 

## 08/14/2017
- Final run-through of engagement module ahead of master re-integration

## 08/11/2017
- Resolving various restructure issues in engagement module

## 08/09/2017
- Resolving global saga architecture issue

## 08/08/2017
- Refactoring Engagement container to be more cohesive
- Moved Engagement-only subcontainers (engagement-specific components) inside Engagement directory
- Hooked up engagement subcontainers to new input suggestions architecture
- Changed RoleForm to RoleInput
- Fit Score Screen
    - Added the react modal dependency to the project.(react-modal)
    - Completed the modal design for Fit Score screen.
    - Working on to refactor the slider component and passing dynamic values to the gradient layer.

## 08/07/2017
- Added the victory library to the module to support fit score graph.
- Added the style for bubbles.
- Working on to create a color gradient for the graph.

## 08/04/2017
- Added the route for fit score screen.

## 08/04/2017
- Upgraded the rc-slider version (v6.1.0 ~> v8.3.1).

## 08/03/2017
- Added the experience and interest module to the project.
- Added the react-dnd dependency.
- Upgraded the styled-component's version.
- Added the babelrc to the module.
- Remove unnecessary files.

## 08/01/2017
- Removed the node_modules from the repository.
- Updated the .gitignore file to ignore .idea files.

## 07/18/2017
- Refactoring all user and auth state up to App container

## 07/12/2017
- Running through full site flow with refactor
- Updated Login and Registration views

## 07/6/2017
- Create InputSuggestions component
- Finished replacing RoleInput with InputSuggestions
- Finished replacing CompanyInput with InputSuggestions

## 07/5/2017
- Investigations into decoupling cross-container functionality

## 06/30/2017
- Architectural decision made regarding containers and duplication:
- - Each Container MUST have its own sagas and reducer.  Sharing these files across containers is WRONG.
- Removed international support bloat

## 06/26/2017
- Created container overrides of tile class for container-specific control and display
- Fixed Dashboard text size bug

## 06/22/2017
- More contributions to the [ReadMe](README.md)

## 06/21/2017
- Lots of contributions to the [ReadMe](README.md) documentation ahead of third-party developers

## 06/20/2017
- Continued development of Dashboard UI
- Set up new header with bootstrap styling and menus
- Removed level requirement/hack from alternative paths flow to match API change

## 06/19/2017
- Set up new dashboard appearance
- Began tracking down how the dashboard data will affect the view

## 06/16/2017
- Finished Role Description UI
- Set up actual data format for Role Description skills saga/selector

## 06/15/2017
- Set up SeeMore with custom override of react-bootstrap Collapse component
- Finished integrating SeeMore into RoleDescription page for blurb and related roles

## 06/14/2017
- Integrated react-bootstrap and bootstrap.css for standard styles
- Started adding react-bootstrap components to Role Description, need to expand to other developed components

## 06/13/2017
- Continued work on individual UI component loading for Role Description
- Set up mock data to be returned in the place of API error messages for Role Description - will need to remove once the API endpoints are available

## 06/12/2017
- Set up Role Input for Role Descriptions
- Set up Role Description sagas, store, and actions
- Tested getting role skills, which failed:
> Request URL:https://dev-api.veevra.com/svc/titlestatistics/weights/title/Software%20Engineer
> Request Method:GET
> Status Code:204 No Content
- Broke up Role Description wiring to allow loading of individual sections of the description
- - Good pattern to follow for other multi-data pages (dashboard, panels, etc.)

## 06/9/2017
- Fleshing out Role Descriptions with some logic borrowed from Alt. Paths

## 06/8/2017
- Set up LinkLi element for linking from a list
- Set up links in Alternative Paths to Role Descriptions, using LinkLi
- Set up route for /role/:roleTitle

## 06/7/2017
- Copied logic from RoleInput to CompanyInput container
- Updated CompanyInput to hit correct API endpoint
- Note: Endpoint data was not available, so testing was not completed

## 05/26/2017
- Edge case fix for missing Alt Path level
- Removed autocomplete from some forms
- Implementation of RoleInput into Engagement flow

## 05/25/2017
- Wrapped up Alternative Paths for now
- - Still defaulting to level 1 for display, likely to change in the future

## 05/24/2017
- RoleInput feeding into Alternative Paths display

## 05/23/2017
- RoleInput connected to title search
- Back button implemented

## 05/22/2017
- Started Change Log
- Updated README with skeleton for document
- Development of RoleInput
- - Saga
- - Actions
- - Reducers
- - Route addition for /alternativePaths