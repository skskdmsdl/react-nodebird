module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('Comment', { // MySQL에는 users로 저장됨
        // id가 기본적으로 들어있음
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
    });
    Comment.associate = (db) => {};
    return Comment;
}