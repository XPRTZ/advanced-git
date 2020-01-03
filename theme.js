export default {
    fonts: {
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
      monospace: '"Roboto Mono", monospace',
    },
    colors: {
      text: 'black',
      background: 'white',
      primary: '#276b44',
    },
    styles: {
        h1: {
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'primary'
        },
        h2: {
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#276b44',
          "&:before": {
            content: '""',
            float: 'left',
            display: 'block',
            width: '5px',
            height: '90px',
            marginRight: '20px',
            backgroundColor: 'primary'
          }
        },
        ul: {
          paddingLeft: '100px'
        },
        li: {
          marginTop: '50px',
          marginBottom: '50px'
        },
        blockquote: {
          fontStyle: 'italic',
        },
        Slide: {
          padding: 0
        }
      }
  }
