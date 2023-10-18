import ForgeUI, { render, Button, IssuePanel, useProductContext } from '@forge/ui';
import api, { route } from '@forge/api';

const App = () => {
  const context = useProductContext();

  const handleInsertComment = async () => {
    if (!context.platformContext) {
      console.error('platformContext is not available.');
      return;
    }

    // Construct the content to be inserted into the comment field.
    const contentToInsert = 'Test comment for thermoaihackathon';

    try {
      // Use the Forge issue APIs to update the comment field.
      await api.asUser().requestJira(route`/rest/api/3/issue/${context.platformContext.issueKey}/comment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: contentToInsert }),
      });

      console.log('Comment added successfully to issue ' + context.platformContext.issueKey + '.');

    } catch (error) {
      console.error('Error updating comment field:', error);
    }
  };

  return (
    <Button text="Insert some text into Comment" onClick={handleInsertComment} />
  );
};

export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
