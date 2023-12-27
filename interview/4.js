function ConditionalRendering({ isLoggedIn }) {
    let content;
    
    if (isLoggedIn) {
      content = <p>已登入的內容</p>;
    } else {
      content = <p>未登入的內容</p>;
    }
  
    return <div>{content}</div>;
  }
  