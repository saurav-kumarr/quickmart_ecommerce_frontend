import React from 'react'
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const SkeletonCustom = () => {
    return (
   <Box sx={{ width: 400 }}>
      {[1, 2, ].map((item) => (
        <Box
          key={item}
          sx={{
            mb: 3,
            p: 2,
            borderRadius: 2,
            border: '1px solid #e0e0e0',
          }}
        >
          {/* Big Skeleton Box */}
          <Skeleton
            variant="rectangular"
            height={150}
            animation="wave"
            sx={{ mb: 2, borderRadius: 2 }}
          />

          {/* Inside Skeleton Strips */}
          <Skeleton animation="wave" height={20} sx={{ mb: 1 }} />
          <Skeleton animation="wave" height={20} sx={{ mb: 1 }} />
          <Skeleton animation="wave" height={20} width="80%" />
        </Box>
      ))}
    </Box>
  );
}

export default SkeletonCustom;